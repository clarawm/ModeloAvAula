import React  from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { ComponentListImage, ComponentPageTitulo, ComponentPanelTitulo } from "../../components";
import { IPage } from "../../../App";

export function Pagina2({setPageI, pageNumber}:IPage) {
    /*PARA MUDAR AS IMAGENS DA LISTA*/
    const img1 = require("../../assets/listimg1.png")
    const img2 = require("../../assets/listimg2.png")
    const pagina2Texto = [
        {id: '1', text: 'As melhores', img: img1},
        {id: '2', text: 'Para curtir', img: img2},
    ]
    return (
        <View style={styles.container}>
            <ComponentPageTitulo setPageI={setPageI} pageNumber={pageNumber} />
            <View style={styles.panel}>
                <ComponentPanelTitulo titulo="Crie uma capa e um título para sua playlist"/>
                <FlatList
                    data={pagina2Texto}
                    renderItem={({item})=>
                        <ComponentListImage key={item.id} text={item.text} img={item.img} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}