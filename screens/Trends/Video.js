import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
const Video = () => {
  return (
    <View style={styles.container}>
      
      {/* <YouTube
              videoId="ZrcRCIPuoKY"
              style={styles.youtubePlayer}
          /> */}
      <ScrollView>

        <View style={styles.videos}>
          <View>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/ZrcRCIPuoKY' }}
              style={styles.webview}
            />
            <Text style={styles.videoTitle}>Wool farming</Text>
            <Text numberOfLines={3}>Here at the 10 Acre Woods we shear our sheep and alpaca in late spring then process their fiber fleece during late fall and winter. We love to teach what we know and learn from others. If yo have any questions of comments, please leave them below and Thanks for Watching!</Text>

          </View>
          
          <View>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/dPrGGv7pHXE' }}
              style={styles.webview}
            />
            <Text style={styles.videoTitle}>Wool farming</Text>
            <Text numberOfLines={3}>Here at the 10 Acre Woods we shear our sheep and alpaca in late spring then process their fiber fleece during late fall and winter. We love to teach what we know and learn from others. If yo have any questions of comments, please leave them below and Thanks for Watching!</Text>
          </View>
          
        </View>
      </ScrollView>
    </View>
  )
}

export default Video

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    // alignSelf: 'stretch',
    height: 240,
  },
  videos: {
    gap: 40,
    padding: 20,
  },
  videoTitle: {
    paddingTop: 12,
    fontSize: 20,
    fontWeight: '600',
  },
})