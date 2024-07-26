import { Pressable, StyleSheet, Text } from "react-native"

export interface OpcaoProps {
  indice: Number
  texto: String
  onPress: () => void
}

export default function Opcao(props: OpcaoProps) {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.texto}>{props.texto}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E9D48',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  texto: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold'
  }
})