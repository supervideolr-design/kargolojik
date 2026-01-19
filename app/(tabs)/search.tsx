import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import BannerAd from '../../components/BannerAd';
import { BRANCHES, Branch } from '../../constants/branches';

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

const PAGE_SIZE = 30;

// Turkish character normalization for search
const normalizeTurkish = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/İ/g, 'i')
    .replace(/Ğ/g, 'g')
    .replace(/Ü/g, 'u')
    .replace(/Ş/g, 's')
    .replace(/Ö/g, 'o')
    .replace(/Ç/g, 'c');
};

export default function SearchScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState((params.q as string) || '');
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [displayCount, setDisplayCount] = useState(PAGE_SIZE);
  const [refreshing, setRefreshing] = useState(false);

  // Get unique companies from data
  const companies = useMemo(() => {
    const uniqueCompanies = [...new Set(BRANCHES.map(b => b.Sirket_Adi))];
    return uniqueCompanies.filter(c => c).sort();
  }, []);

  // Filter branches based on search query and company
  const filteredBranches = useMemo(() => {
    let results = BRANCHES;

    if (searchQuery.trim()) {
      const query = normalizeTurkish(searchQuery.trim());
      const words = query.split(/\s+/);
      
      results = results.filter(branch => {
        const searchText = normalizeTurkish(`${branch.Sube_Adi} ${branch.Sehir} ${branch.Ilce} ${branch.Adres} ${branch.Sirket_Adi}`);
        return words.every(word => searchText.includes(word));
      });
    }

    if (selectedCompany) {
      results = results.filter(branch => branch.Sirket_Adi === selectedCompany);
    }

    return results;
  }, [searchQuery, selectedCompany]);

  // Paginated results
  const displayedBranches = useMemo(() => {
    return filteredBranches.slice(0, displayCount);
  }, [filteredBranches, displayCount]);

  useEffect(() => {
    if (params.q && params.q !== searchQuery) {
      setSearchQuery(params.q as string);
    }
  }, [params.q]);

  const handleSearch = () => {
    setDisplayCount(PAGE_SIZE);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setDisplayCount(PAGE_SIZE);
    setTimeout(() => setRefreshing(false), 500);
  };

  const handleLoadMore = () => {
    if (displayCount < filteredBranches.length) {
      setDisplayCount(prev => prev + PAGE_SIZE);
    }
  };

  const handleCompanyFilter = (company: string) => {
    setSelectedCompany(company);
    setDisplayCount(PAGE_SIZE);
  };

  const clearFilters = () => {
    setSelectedCompany('');
    setSearchQuery('');
    setDisplayCount(PAGE_SIZE);
  };

  const getCompanyColor = (company: string) => {
    return COMPANY_COLORS[company] || '#1e88e5';
  };

  const handleBranchPress = (branch: Branch) => {
    router.push(`/branch/${branch.id}`);
  };

  const renderBranchItem = useCallback(({ item }: { item: Branch }) => {
    return (
      <TouchableOpacity
        style={styles.branchCard}
        onPress={() => handleBranchPress(item)}
        activeOpacity={0.7}
      >
        <View style={styles.branchHeader}>
          <View style={[styles.companyBadge, { backgroundColor: `${getCompanyColor(item.Sirket_Adi)}20` }]}>
            <Text style={[styles.companyText, { color: getCompanyColor(item.Sirket_Adi) }]}>
              {item.Sirket_Adi}
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color="#94a3b8" />
        </View>
        <Text style={styles.branchName}>{item.Sube_Adi}</Text>
        <View style={styles.branchInfo}>
          <Feather name="map-pin" size={14} color="#64748b" />
          <Text style={styles.branchLocation}>
            {item.Sehir} / {item.Ilce}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      {/* Arama Kutusu */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Feather name="search" size={20} color="#64748b" />
          <TextInput
            style={styles.searchInput}
            placeholder="Şube, şehir veya ilçe ara..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => {
              setSearchQuery('');
              setDisplayCount(PAGE_SIZE);
            }}>
              <Feather name="x" size={20} color="#64748b" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Feather name="search" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Şirket Filtreleri */}
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.filterPill, !selectedCompany && styles.filterPillActive]}
            onPress={() => handleCompanyFilter('')}
          >
            <Text style={[styles.filterPillText, !selectedCompany && styles.filterPillTextActive]}>
              Tümü
            </Text>
          </TouchableOpacity>
          {companies.map((company) => (
            <TouchableOpacity
              key={company}
              style={[
                styles.filterPill,
                selectedCompany === company && styles.filterPillActive
              ]}
              onPress={() => handleCompanyFilter(company)}
            >
              <View style={[styles.companyDot, { backgroundColor: getCompanyColor(company) }]} />
              <Text style={[
                styles.filterPillText,
                selectedCompany === company && styles.filterPillTextActive
              ]}>
                {company.replace(' Kargo', '')}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Sonuç Sayısı */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsCount}>
          {filteredBranches.length.toLocaleString('tr-TR')} şube bulundu
        </Text>
        {(selectedCompany || searchQuery) && (
          <TouchableOpacity onPress={clearFilters}>
            <Text style={styles.clearFilters}>Temizle</Text>
          </TouchableOpacity>
        )}
      </View>

      <BannerAd />

      <FlatList
        data={displayedBranches}
        renderItem={renderBranchItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Feather name="search" size={48} color="#cbd5e1" />
            <Text style={styles.emptyTitle}>Sonuç Yok</Text>
            <Text style={styles.emptySubtitle}>Farklı bir arama deneyin</Text>
          </View>
        )}
        ListFooterComponent={() => (
          displayCount < filteredBranches.length ? (
            <View style={styles.loadMoreContainer}>
              <Text style={styles.loadMoreText}>
                {displayedBranches.length} / {filteredBranches.length} gösteriliyor
              </Text>
              <ActivityIndicator style={{ marginTop: 10 }} color="#1e88e5" />
            </View>
          ) : null
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fa' },
  searchContainer: { flexDirection: 'row', padding: 12, gap: 10, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e2e8f0' },
  searchBox: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: 10, paddingHorizontal: 12 },
  searchInput: { flex: 1, height: 44, fontSize: 15, color: '#1e293b', marginLeft: 8 },
  searchButton: { backgroundColor: '#1e88e5', borderRadius: 10, width: 44, height: 44, justifyContent: 'center', alignItems: 'center' },
  filterContainer: { backgroundColor: '#fff', paddingVertical: 10, paddingLeft: 16 },
  filterPill: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: '#e2e8f0', marginRight: 8 },
  filterPillActive: { borderColor: '#1e88e5', backgroundColor: '#e0f2fe' },
  filterPillText: { fontSize: 13, color: '#64748b' },
  filterPillTextActive: { color: '#1e88e5', fontWeight: 'bold' },
  companyDot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  resultsHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#fff' },
  resultsCount: { fontSize: 14, color: '#64748b' },
  clearFilters: { fontSize: 14, color: '#ef4444', fontWeight: 'bold' },
  listContainer: { padding: 16, paddingBottom: 100 },
  branchCard: { 
    backgroundColor: '#fff', 
    padding: 16, 
    borderRadius: 12, 
    marginBottom: 12, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 8, 
    elevation: 2 
  },
  branchHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  companyBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  companyText: { fontSize: 12, fontWeight: 'bold' },
  branchName: { fontSize: 16, fontWeight: 'bold', color: '#1e293b', marginBottom: 4 },
  branchInfo: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  branchLocation: { fontSize: 13, color: '#64748b', marginLeft: 6 },
  emptyContainer: { alignItems: 'center', marginTop: 50 },
  emptyTitle: { fontSize: 18, color: '#64748b', marginTop: 12, fontWeight: '600' },
  emptySubtitle: { fontSize: 14, color: '#94a3b8', marginTop: 4 },
  loadMoreContainer: { alignItems: 'center', paddingVertical: 20 },
  loadMoreText: { fontSize: 13, color: '#64748b' },
});
