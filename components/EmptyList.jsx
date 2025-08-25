import colors from "../desing/colors";
import {Image, StyleSheet, Text, View} from "react-native";

export default function EmptyList() {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/ClipboardTextRegular.png")} />
            <Text style={styles.titulo}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.Subtitulo}>Crie tarefa e organize seus intens</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 50,
    },

    titulo:{
        color: colors.gray_500,
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30

    },

    Subtitulo:{
        color: colors.gray_500,
        fontSize: 18,
    }
})