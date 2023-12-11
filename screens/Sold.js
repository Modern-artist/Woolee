import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import JobCard from '../components/JobCard'

const Sold = () => {
  return (
    <ScrollView>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      </ScrollView>
  )
}

export default Sold

const styles = StyleSheet.create({})