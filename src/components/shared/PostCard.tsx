import { Models } from "appwrite";
import { Image, View } from "react-native";
import { TextMedium, TextRegular } from "../ui/TextStyled";

export const PostCard = ({ item }: { item: Models.Document }) => {
  console.log(item.imageUrl);
  return (
    <>
      {item && (
        <View className="w-full py-2 px-3 bg-bgLight my-1.5 rounded-md">
          {/* profile */}
          <View className="w-full flex-row gap-2">
            <Image
              className=" h-12 w-12 rounded-full"
              src={item.creator.imageUrl}
            />
            <View className=" justify-center">
              <TextMedium className=" text-lg  text-content">
                {" "}
                {item.creator.name}
              </TextMedium>
              <TextRegular className=" leading-4 text-content/50 text-sm ">
                @{item.creator.username}
              </TextRegular>
            </View>
          </View>

          {/* content */}

          {item.caption && (
            <TextRegular className=" text-content mt-2">
              {item.caption}
            </TextRegular>
          )}
          {item.imageUrl && (
            <Image
              resizeMode="cover"
              className="w-full h-[560px] rounded-lg mt-4"
              src={item.imageUrl}
            />
          )}
        </View>
      )}
    </>
  );
};
