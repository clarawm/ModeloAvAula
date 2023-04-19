import React from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { IPage } from "../../../App";
import { styles } from "./styles";

export function PageTitulo({setPageI, pageNumber}: IPage) {
    return(
        <View style={styles.container}>
            {pageNumber == 1 ? (
                <>
                   <TouchableOpacity onPress={() => setPageI(pageNumber)}>
                        <Text style={styles.text}>{'<<'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Solta o som!!</Text> 
                </>
            ) : (
                <>
                    <Text style={styles.text}>Solta o som!</Text>
                    <TouchableOpacity onPress={() => setPageI(pageNumber)}>
        
                        <Text style={styles.text}>{'>>'}</Text>
                    </TouchableOpacity>
                </>
            )}
            
        </View>
    )
}