import Pergunta from "@/components/questionario/Pagina";
import Resultado from "@/components/questionario/Resultado";
import Logo from "@/components/template/Logo";
import Pagina from "@/components/template/Pagina";
import useQuestionario from "@/data/hooks/useQuestionario";
import React from "react";
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

export default function Index() {

  const {
    pergunta,
    concluido,
    pontuacao,
    TotalDePerguntas,
    responder,
    reiniciar
  } = useQuestionario()

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      reiniciar()
    }, 2000);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Pagina>
          <View style={{ gap: 40 }}>
            <Logo />

            {concluido ? (

              <Resultado
                pontuacao={pontuacao}
                totalDePerguntas={TotalDePerguntas}
                reiniciar={reiniciar} />

            ) : (

              <Pergunta pergunta={pergunta} opcaoSelecionada={responder} />

            )}

          </View>
        </Pagina>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});