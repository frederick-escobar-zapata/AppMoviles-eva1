import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useUser } from '../contexts/UserContext';

export default function HomeScreen() {
  const { user } = useUser();
  const [welcomeMessage, setWelcomeMessage] = useState<string>('Cargando...');

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setWelcomeMessage('¡Bienvenido!');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{welcomeMessage}</Text>
        <Text style={styles.subtitle}>Has iniciado sesión correctamente</Text>
        <Text style={styles.email}>Email: {user?.email}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '500',
  },
});
