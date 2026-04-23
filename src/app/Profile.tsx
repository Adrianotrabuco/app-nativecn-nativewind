import { View, Image, TextInput } from "react-native";
import { User } from "@/components/User";
import { Skills } from "@/components/Skills";
import { Preferences } from "@/components/Preferences";
import { Button } from "@/components/Button";

export function Profile() {

    function handleSave() {
        console.log("Salvo!");
    }

    return (
        <View className="flex-1 bg-gray-700">
            <Image 
                source={require("@/assets/banner.png")}
                className="w-full h-52 -mb-16"
            />

            <View className="flex-1 px-4 pb-4">
                <User />
                <Skills />
                <Preferences />

                <TextInput
                    placeholder="Company"
                    className="bg-white rounded px-4 py-2 mb-6"
                />

                <Button label="Save" onPress={handleSave} />
            </View>
        </View>
    );
}