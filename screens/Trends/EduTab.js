import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import NewsCard from '../../components/NewsCard';

const EduTab = () => {
    // const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    const articles = [
        {
            id: 1,
            title: 'Revolutionizing Aquaculture Practices',
            author: 'Aquaculture Research Institute',
            date: 'Nov 12',
            imageUri: 'https://example.com/aquaculture-image.jpg',
            languages: ['English', 'Chinese'],
            readTime: '15 min read',
            content: `Aquaculture undergoes a transformative journey, leveraging technology and sustainable practices to meet the growing demand for seafood while ensuring environmental responsibility. This industry evolution involves advanced aquaculture techniques, such as recirculating aquaculture systems (RAS) and integrated multi-trophic aquaculture (IMTA), providing a holistic and efficient approach to seafood production. Researchers and practitioners collaborate to optimize feed formulations, disease management strategies, and water quality monitoring, contributing to healthier aquatic ecosystems. Furthermore, aquaculture sustainability extends beyond production to encompass responsible sourcing, ethical practices, and consumer education. As aquaculture continues to play a crucial role in global food security, these innovations pave the way for a resilient and environmentally conscious seafood industry.`,
        },
        {
            id: 2,
            title: 'Advancements in Renewable Energy Technologies',
            author: 'Renewable Energy Institute',
            date: 'Dec 5',
            imageUri: 'https://example.com/renewable-energy-image.jpg',
            languages: ['English', 'Spanish'],
            readTime: '20 min read',
            content: `The renewable energy landscape experiences remarkable advancements as technologies evolve to address climate change and reduce reliance on fossil fuels. Solar photovoltaics, wind turbines, and energy storage systems undergo continuous improvements, enhancing efficiency and affordability. Smart grid technologies facilitate seamless integration of renewable energy into existing power systems, optimizing energy distribution and consumption. Innovations in bioenergy and geothermal technologies further diversify the renewable energy portfolio. As global efforts intensify to achieve sustainable energy goals, these developments mark a pivotal era in the transition towards a cleaner and more sustainable energy future.
    `,
        },
        {
            id: 3,
            title: 'Exploring Mars: Recent Discoveries',
            author: 'NASA Space Exploration Team',
            date: 'Jan 20',
            imageUri: 'https://example.com/mars-discovery-image.jpg',
            languages: ['English', 'French'],
            readTime: '18 min read',
            content: `Recent missions to Mars have unveiled fascinating discoveries, reshaping our understanding of the red planet. Advanced rovers and orbiters equipped with cutting-edge instruments have identified potential signs of past microbial life and provided insights into Mars' geology. The search for water and exploration of underground structures aim to unravel the mysteries of Mars' history and potential habitability. As scientific exploration continues, these findings open new frontiers in our quest to understand the vast and enigmatic universe beyond Earth.
    `,
        },
        {
            id: 4,
            title: 'Future of Artificial Intelligence in Healthcare',
            author: 'AI in Healthcare Research Group',
            date: 'Feb 8',
            imageUri: 'https://example.com/ai-healthcare-image.jpg',
            languages: ['English', 'German'],
            readTime: '22 min read',
            content: `The integration of artificial intelligence (AI) into healthcare systems is poised to revolutionize patient care, diagnostics, and treatment planning. AI algorithms analyze vast datasets, offering predictive insights for disease prevention and personalized medicine. Robotics and AI-driven surgical procedures enhance precision and minimize invasiveness. Telehealth platforms powered by AI enable remote patient monitoring and timely interventions. Ethical considerations and regulatory frameworks are crucial in shaping the responsible implementation of AI in healthcare. This article explores the promising future of AI as a transformative force in the medical field.
    `,
        },
        {
            id: 5,
            title: 'Innovations in Urban Transportation: Smart Cities',
            author: 'Urban Mobility Research Institute',
            date: 'Mar 15',
            imageUri: 'https://example.com/smart-city-transportation-image.jpg',
            languages: ['English', 'Japanese'],
            readTime: '17 min read',
            content: `Smart city initiatives are reshaping urban transportation, integrating technology to enhance efficiency, sustainability, and accessibility. Intelligent traffic management systems optimize traffic flow and reduce congestion, while electric and autonomous vehicles revolutionize personal and public transportation. Shared mobility services, such as ride-hailing and bike-sharing, contribute to a more connected and eco-friendly urban landscape. The seamless integration of data-driven solutions fosters a future where cities are not only smarter but also more livable and resilient.
    `,
        },
        {
            id: 6,
            title: 'Unlocking the Mysteries of Quantum Computing',
            author: 'Quantum Computing Research Center',
            date: 'Apr 5',
            imageUri: 'https://example.com/quantum-computing-image.jpg',
            languages: ['English', 'Russian'],
            readTime: '25 min read',
            content: `Quantum computing, leveraging the principles of quantum mechanics, promises unparalleled computational capabilities with the potential to revolutionize various fields. Quantum bits (qubits) enable parallel processing, solving complex problems at unprecedented speeds. Quantum algorithms have the potential to transform cryptography, optimization, and simulation tasks. Research efforts focus on overcoming technical challenges, such as error correction and qubit stability. As the quantum computing landscape evolves, this article delves into the current state and future prospects of this groundbreaking technology.
    `,
        },
        {
            id: 7,
            title: 'The Renaissance of Traditional Artisan Crafts',
            author: 'Artisan Craftsmanship Revival Society',
            date: 'May 12',
            imageUri: 'https://example.com/artisan-crafts-image.jpg',
            languages: ['English', 'Italian'],
            readTime: '19 min read',
            content: `In a world dominated by mass production, there is a renewed appreciation for traditional artisan crafts that embody skill, heritage, and authenticity. Artisans across various disciplines, from woodworking to ceramics, are experiencing a renaissance as consumers seek unique and handcrafted creations. Sustainable practices and ethical sourcing further enhance the appeal of artisanal products. This article explores the revival of artisan craftsmanship and its cultural significance in an era that values craftsmanship over mass-produced uniformity.
    `,
        },
        {
            id: 8,
            title: 'Exploring the Depths: Oceanographic Discoveries',
            author: 'Ocean Exploration Institute',
            date: 'Jun 8',
            imageUri: 'https://example.com/oceanographic-discoveries-image.jpg',
            languages: ['English', 'Spanish'],
            readTime: '21 min read',
            content: `Oceanographic exploration unveils the mysteries of Earth's oceans, providing valuable insights into marine ecosystems, biodiversity, and climate dynamics. Advanced research vessels equipped with state-of-the-art sensors and underwater vehicles delve into the deepest trenches and uncharted territories. Discoveries include new species, hydrothermal vent communities, and geological formations. Insights from oceanography contribute to understanding climate change impacts and informing conservation efforts. As exploration technologies advance, the journey to uncover the secrets of the ocean continues, promising new revelations and a deeper connection to the planet's most expansive and least-explored frontier.
    `,
        },
        {
            id: 9,
            title: 'Future of Space Tourism: Beyond Earth’s Atmosphere',
            author: 'Space Tourism Futures Foundation',
            date: 'Jul 17',
            imageUri: 'https://example.com/space-tourism-image.jpg',
            languages: ['English', 'French'],
            readTime: '23 min read',
            content: `The realm of space tourism is poised for unprecedented growth, with private companies and space agencies gearing up to make extraterrestrial travel a reality. Advancements in spacecraft technology, orbital habitats, and propulsion systems pave the way for civilian space exploration. Commercial spaceflights, lunar tourism, and orbital hotels are among the exciting possibilities. As the space tourism industry takes its first steps beyond Earth's atmosphere, this article explores the potential future scenarios and challenges of venturing into the cosmos for leisure and exploration.
    `,
        },
        {
            id: 10,
            title: 'Innovations in Sustainable Agriculture Practices',
            author: 'Sustainable Agriculture Institute',
            date: 'Aug 29',
            imageUri: 'https://example.com/sustainable-agriculture-image.jpg',
            languages: ['English', 'Spanish'],
            readTime: '16 min read',
            content: `Sustainable agriculture practices are at the forefront of ensuring food security while minimizing environmental impact. Precision farming, agroecology, and organic farming techniques contribute to soil health, biodiversity, and water conservation. Technology-driven solutions, such as IoT-enabled crop monitoring and AI-powered crop predictions, optimize resource use and reduce waste. Conservation agriculture and regenerative farming models promote resilience in the face of climate change. This article explores the diverse innovations shaping the future of sustainable agriculture and fostering a harmonious relationship between food production and the planet.
    `,
        },
    ];
  return (
      <View style={styles.contentContainer}>
          <ScrollView style={styles.content}>
              {articles.map((article) => (
                  <NewsCard
                      key={article.id}
                      article={article}
                      onPress={() => navigation.navigate("Article", { article })}
                  />
              ))}
          </ScrollView>
      </View>
  )
}

export default EduTab

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
    },

    newsCard: {
        width: '100%',
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 2,
    },
    authDetail: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',

    },
    authDes: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    authName: {
        fontSize: 16,
        fontWeight: '600'

    },
    postDate: {
        color: "#AAAAAA"

    },
    newsTitle: {
        fontSize: 20,
        fontWeight: 'bold'

    },

    newsBioImg: {
        // backgroundColor:'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    newsBio: {
        fontSize: 16,
        fontWeight: '500',
        color: '#141414',
        width: '60%'

    },
    bottomInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    bottomInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    readingTime: {
        fontSize: 16,
        fontWeight: '500',
        color: '#AAAAAA',
    },
    bottomBtns: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20

    },
})