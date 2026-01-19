import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
  Image,
} from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BRANCHES, Branch } from '../../constants/branches';

// Company logos mapping
const COMPANY_LOGOS: Record<string, any> = {
  'Aras Kargo': require('../../assets/images/aras-logo.png'),
  'PTT Kargo': require('../../assets/images/ptt-logo.png'),
  'DHL Kargo': require('../../assets/images/dhl-logo.png'),
  'Sürat Kargo': require('../../assets/images/surat-logo.png'),
  'Inter Global Kargo': require('../../assets/images/inter-global-logo.png'),
  'Yurtiçi Kargo': require('../../assets/images/yurtici-logo.png'),
  'TNT Kargo': require('../../assets/images/tnt-logo.png'),
  'UPS Kargo': require('../../assets/images/ups-logo.png'),
};

const COMPANY_COLORS: Record<string, string> = {
  'Aras Kargo': '#e74c3c',
  'PTT Kargo': '#f1c40f',
  'DHL Kargo': '#e67e22',
  'Sürat Kargo': '#3498db',
  'Inter Global Kargo': '#9b59b6',
  'Yurtiçi Kargo': '#2ecc71',
  'TNT Kargo': '#ff6b00',
  'UPS Kargo': '#6d1a36',
  'MNG Kargo': '#1e88e5',
};

export default function BranchDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  
  // Find branch from local data
  const branch = BRANCHES.find(b => b.id === id);

  if (!branch) {
    return (
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ title: 'Şube Detayı' }} />
        <View style={styles.errorContainer}>
          <Feather name="alert-circle" size={64} color="#ef4444" />
          <Text style={styles.errorTitle}>Şube Bulunamadı</Text>
          <Text style={styles.errorSubtitle}>Bu şube bilgisi mevcut değil</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Geri Dön</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const companyColor = COMPANY_COLORS[branch.Sirket_Adi] || '#1e88e5';
  const companyLogo = COMPANY_LOGOS[branch.Sirket_Adi];

  const handleCall = (phone: string) => {
    const phoneNumber = phone.replace(/\s/g, '');
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleOpenMaps = () => {
    const query = encodeURIComponent(`${branch.Adres}, ${branch.Ilce}, ${branch.Sehir}`);
    const url = Platform.select({
      ios: `maps:?q=${query}`,
      android: `geo:0,0?q=${query}`,
      default: `https://www.google.com/maps/search/?api=1&query=${query}`,
    });
    Linking.openURL(url as string);
  };

  const handleShare = async () => {
    const message = `${branch.Sube_Adi}\n${branch.Adres}\n${branch.Ilce}, ${branch.Sehir}\nTel: ${branch.Telefon_1}`;
    // For web, copy to clipboard
    if (Platform.OS === 'web') {
      try {
        await navigator.clipboard.writeText(message);
        alert('Şube bilgileri kopyalandı!');
      } catch {
        alert(message);
      }
    } else {
      // Native share would go here
      Linking.openURL(`sms:?body=${encodeURIComponent(message)}`);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen 
        options={{ 
          title: 'Şube Detayı',
          headerStyle: { backgroundColor: companyColor },
          headerTintColor: '#fff',
        }} 
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Company Logo Header */}
        <View style={[styles.logoHeader, { backgroundColor: companyColor }]}>
          {companyLogo ? (
            <View style={styles.logoContainer}>
              <Image source={companyLogo} style={styles.companyLogo} resizeMode="contain" />
            </View>
          ) : (
            <View style={styles.logoPlaceholder}>
              <Feather name="package" size={48} color="#fff" />
            </View>
          )}
          <Text style={styles.companyName}>{branch.Sirket_Adi}</Text>
        </View>

        {/* Branch Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.branchName}>{branch.Sube_Adi}</Text>
          
          <View style={styles.locationBadge}>
            <Feather name="map-pin" size={16} color={companyColor} />
            <Text style={[styles.locationText, { color: companyColor }]}>
              {branch.Sehir} / {branch.Ilce}
            </Text>
          </View>
        </View>

        {/* Address Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Feather name="home" size={20} color="#64748b" />
            <Text style={styles.sectionTitle}>Adres</Text>
          </View>
          <Text style={styles.addressText}>{branch.Adres}</Text>
          <Text style={styles.addressSubtext}>{branch.Ilce}, {branch.Sehir}</Text>
        </View>

        {/* Phone Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Feather name="phone" size={20} color="#64748b" />
            <Text style={styles.sectionTitle}>Telefon</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.phoneRow}
            onPress={() => handleCall(branch.Telefon_1)}
          >
            <Text style={styles.phoneNumber}>{branch.Telefon_1}</Text>
            <View style={[styles.callBadge, { backgroundColor: companyColor }]}>
              <Feather name="phone-call" size={16} color="#fff" />
            </View>
          </TouchableOpacity>

          {branch.Telefon_2 && (
            <TouchableOpacity 
              style={styles.phoneRow}
              onPress={() => handleCall(branch.Telefon_2)}
            >
              <Text style={styles.phoneNumber}>{branch.Telefon_2}</Text>
              <View style={[styles.callBadge, { backgroundColor: companyColor }]}>
                <Feather name="phone-call" size={16} color="#fff" />
              </View>
            </TouchableOpacity>
          )}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={[styles.actionButton, { backgroundColor: companyColor }]}
            onPress={() => handleCall(branch.Telefon_1)}
          >
            <Feather name="phone" size={22} color="#fff" />
            <Text style={styles.actionButtonText}>Şubeyi Ara</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionButton, styles.mapsButton]}
            onPress={handleOpenMaps}
          >
            <Feather name="navigation" size={22} color="#fff" />
            <Text style={styles.actionButtonText}>Yol Tarifi Al</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionButton, styles.shareButton]}
            onPress={handleShare}
          >
            <Feather name="share-2" size={22} color="#fff" />
            <Text style={styles.actionButtonText}>Paylaş</Text>
          </TouchableOpacity>
        </View>

        {/* Info Footer */}
        <View style={styles.footer}>
          <Feather name="info" size={16} color="#94a3b8" />
          <Text style={styles.footerText}>
            Şube bilgileri düzenli olarak güncellenmektedir. Güncel bilgi için şubeyi arayınız.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 16,
  },
  errorSubtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 8,
  },
  backButton: {
    marginTop: 24,
    backgroundColor: '#1e88e5',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoHeader: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  logoContainer: {
    width: 120,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  companyLogo: {
    width: '100%',
    height: '100%',
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  infoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: -24,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  branchName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    gap: 6,
  },
  locationText: {
    fontSize: 15,
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
  },
  addressText: {
    fontSize: 16,
    color: '#1e293b',
    lineHeight: 24,
  },
  addressSubtext: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  phoneNumber: {
    fontSize: 18,
    color: '#1e293b',
    fontWeight: '500',
  },
  callBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsContainer: {
    padding: 16,
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 14,
    gap: 10,
  },
  mapsButton: {
    backgroundColor: '#10b981',
  },
  shareButton: {
    backgroundColor: '#6366f1',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginHorizontal: 16,
    marginVertical: 24,
    padding: 16,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
  },
  footerText: {
    flex: 1,
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
  },
});
