import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const technologies =
    [
        'React Native',
        'JavaScript',
        'Node.js',
        'Express',
        'MongoDB'
    ];

export default function HomeScreen() {
  const renderTechBoxes = () => {
    return (
        <View style={styles.techContainer}>
            {technologies
                .map((tech, index) => (
                    <View key={index}
                        style={styles.techBox}>
                        <Text style={styles.techText}>
                            {tech}
                        </Text>
                    </View>
                ))}
        </View>
    );
};
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Diana Guerra</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Front End Developer</ThemedText>
        <ThemedText type="default">
        As a solution-driven IT with 8+ years of experience working with multicultural teams, having
        gained functional and practical knowledge, of the supply chain developing myself in the
        healthcare and retail industries.
        I look forward to bringing my strong technical and analytical skills to this Developer
        Opening.
        The most important duties in my professional carrier are software development. worked
        with agile methodologies, production support, React & React Native development, and
        code deployment.
        I am a team player with the ability to multi-task and prioritize work while maintaining core
        responsibilities, analyzing situations from a variety of perspectives and finding the root
        cause, and providing the best solutions with a consistent WIN-WIN attitude and focus, in a
        high-technology professional environment.
        </ThemedText>
          
      </ThemedView>
      {renderTechBoxes()}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
},
  techBox: {
    backgroundColor: '#61dafb',
    borderRadius: 5,
    padding: 5,
    margin: 5,
},
techText: {
    color: '#fff',
},
});
