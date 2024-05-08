import React, {useState} from 'react';
import { View, FlatList, StyleSheet , TextInput,TouchableOpacity,Text} from 'react-native';
import ProductItem from './ProductItem'; 
const productsData = [
  { id: '1', name: 'WhisKas', price: '$10', detail: 'Thuc an cho  meo tren 1 nam tuoi'},
  { id: '2', name: 'Cát Khô', price: '$20', detail: 'Cat ve sinh dang 3 lit'},
  { id :'3', name:'Pate', price:'$5', detail: 'Pate thuong cho meo moi lua tuoi'},
  { id:'4', name: 'Cỏ Bạc hà mèo', price: '$10', detail: 'Co Bac Ha Meo yeu thich'},
  { id: '5',name: 'Cần câu cho mèo', price: '$10', detail: 'Đồ chơi cho mèo yêu'},
  { id: '6', name: 'Giường tự ráp', price: '$30', detail: 'Giường gỗ tự ráp cho mèo'},
];

function ProductScreen ({navigation}){
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const handleSearch = () => {
      const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    }
 const renderProductItem = ({ item}) => <ProductItem product={item} />;
 return (
  <View style={styles.container}>
    <TextInput
      style={styles.searchInput}
      placeholder="Tìm kiếm sản phẩm..."
      onChangeText={(text) => setSearchQuery(text)}
      onSubmitEditing={handleSearch}
    />
    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
      <Text style={styles.searchButtonText}>Tìm kiếm</Text>
    </TouchableOpacity>
    <FlatList
      data={filteredProducts}
      keyExtractor={(item) => item.id}
      renderItem={renderProductItem}
    /></View>
      );
    };
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  searchButton: {
    backgroundColor: 'blue',
    padding: 12,
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 10,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductScreen;

