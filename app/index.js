import { View, Text, ImageBackground, Image, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import SearchBar from '../components/searchBar';
import BottomBar from '../components/bottomBar';
import NavigationButton from '../components/navigationButton';

function Zhome() {
  const [data, set_data] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
  ]);

  const [scrollDirection, setScrollDirection] = useState('up');
  const [offset, setOffset] = useState(0);

  console.log(scrollDirection);

  const handleScroll = event => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction =
      currentOffset > 0 && currentOffset > offset ? 'down' : 'up';

    // Update the scroll direction only if it has changed
    if (direction !== scrollDirection) {
      setScrollDirection(direction);
    }

    // Update the offset
    setOffset(currentOffset);
  };

 return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/mesh2.png')}>
        <View style={styles.overlay}>
          {/*====search bar starts==== */}
          {scrollDirection == 'up' ? <SearchBar /> : null}

          {/*====Property box starts==== */}
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            onScroll={handleScroll}
            ListHeaderComponent={
              <>
                <View style={styles.headerContainer}>
                  <Text style={styles.headerText}>Spaces</Text>
                  <View style={styles.filterContainer}>
                    <Text style={styles.filterText}>All : All</Text>
                    <Image
                      source={require('../assets/caret.png')}
                      style={styles.caretIcon}
                    />
                  </View>
                </View>
              </>
            }
            renderItem={({ item, index }) => (
              <View style={styles.propertyContainer}>
                <View style={styles.propertyDetails}>
                  {/* Title of property starts */}
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Prestige Heights</Text>
                  </View>
                  {/* Title of property ends */}
                  {/* No. of flats starts */}
                  <View style={styles.flatsContainer}>
                    <Text style={styles.flatsText}>460 flats</Text>
                    <View style={styles.separator} />
                    <Text style={styles.flatsText}>3 km</Text>
                  </View>
                  {/* No. of flats ends */}
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>
                      Min{' '}
                      <Text style={styles.boldText}>rs 700</Text> - Campaign Type
                    </Text>
                    <Text style={styles.priceText}>
                      Max{' '}
                      <Text style={styles.boldText}>rs 9000</Text> - Campaign Type
                    </Text>
                  </View>
                  <View style={styles.offerContainer}>
                    <Image
                      source={require('../assets/offer3.png')}
                      style={styles.icon}
                    />
                    <Text style={styles.offerText}>1 offer{'   '}</Text>
                    <Text style={styles.separatorText}> & </Text>
                    <Image
                      source={require('../assets/deal3.png')}
                      style={styles.icon}
                    />
                    <Text style={styles.offerText}>2 deals</Text>
                    <Text style={styles.infoText}>
                      already in place for you
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />

          {/*=====Navigation button at bottom starts=====*/}
          <NavigationButton />
          {/*====BottomBar starts==== */}
          <BottomBar />
          {/*====BottomBar ends==== */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(247,244,244,0.8)',
  },
  headerContainer: {
    height: 50,
    marginTop: '19%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: '4%',
    color: '#004F84',
    fontWeight: '700',
    fontSize: 32,
    zIndex: 1,
  },
  filterContainer: {
    height: '50%',
    width: 80,
    backgroundColor: 'rgba(0, 125, 208, 1)',
    position: 'absolute',
    right: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  filterText: {
    color: 'white',
  },
  caretIcon: {
    height: 19,
    width: 19,
  },
  propertyContainer: {
    height: 140,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 20,
    zIndex: 1,
  },
  propertyDetails: {
    height: 140,
    width: '94%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  titleContainer: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    marginLeft: 15,
  },
  titleText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#004F84',
  },
  flatsContainer: {
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10,
  },
  flatsText: {
    marginLeft: 15,
    fontSize: 14,
    color: '#557184',
  },
  separator: {
    height: 2,
    width: 2,
    backgroundColor: '#557184',
    marginLeft: 10,
  },
  priceContainer: {
    height: '25%',
    width: '100%',
    marginTop: 5,
  },
  priceText: {
    fontSize: 12,
    marginLeft: 15,
    color: '#557184',
  },
  boldText: {
    fontWeight: 'bold',
  },
  offerContainer: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    marginLeft: 15,
  },
  offerText: {
    marginLeft: 10,
    color: 'rgba(85, 113, 132, 1)',
    fontSize: 12,
    fontWeight: 'bold',
  },
  separatorText: {
    color: '#557184',
    fontSize: 12,
  },
  infoText: {
    marginLeft: 10,
    color: '#557184',
    fontSize: 12,
  },
});
export default Zhome;