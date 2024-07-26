import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ResultadoProps {
  pontuacao: number
  totalDePerguntas: number
  reiniciar: () => void
}

export default function Resultado(props: ResultadoProps) {

  const { pontuacao, totalDePerguntas, reiniciar } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Você acertou</Text>
      <Text style={styles.destaque}>
        {Math.round((pontuacao / totalDePerguntas * 100))}%
      </Text>
      <Pressable onPress={reiniciar} style={styles.botao}>
        <Text style={styles.textoBotao}>Teiniciar</Text>
      </Pressable>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    gap: 15,
    paddingVertical: 25
  },
  texto: {
    color: '#bbb',
    fontSize: 23
  },
  destaque: {
    color: '#fff',
    fontSize: 80,
    fontWeight: '900'
  },
  botao: {
    marginTop: 20,
    backgroundColor: '#2E9D48',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18
  },
})