import {
  GridItem,
  Stack,
} from "@chakra-ui/react";
import SmallBox from "../../Shared/SmallBox";

export default function MainBar({ children }: any) {
  const Props = [
    {
      src: 'https://bit.ly/dan-abramov',
      name: 'First image',
      textup: '2.348',
      textbottom: 'Weekly Follower',
    },
    {
      src: 'https://bit.ly/ryan-florence',
      name: 'Second image',
      textup: '2.348',
      textbottom: 'Weekly following',
    },
    {
      src: 'https://bit.ly/kent-c-dodds',
      name: 'Third image',
      textup: '2.348',
      textbottom: 'Weekly Like',
    },
    {
      src: 'https://bit.ly/prosper-baba',
      name: 'Fourth image',
      textup: '2.348',
      textbottom: 'Weekly Comment',
    },

  ]
  return (
    <GridItem>
      <Stack direction="row" justifyContent={"space-evenly"}>
      {Props?.map((prop, index) => (
        <SmallBox name={prop.name} src={prop.src} textup={prop.textup} textbottom={prop.textbottom} key={index}/>
      ))}

      </Stack>
    </GridItem>
  );
}
