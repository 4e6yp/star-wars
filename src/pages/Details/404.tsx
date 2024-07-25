import { Button, Center, Container, Image, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function DetailsNotFound() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  }

  return <Container p="xl" mt="200px" ta="center">
    <Title>These aren't the droids you're looking for...</Title>
    <Center mt="xl">
      <Image src="/Droids.jpg" />
    </Center>
    <Button mt="xl" onClick={onClick}>To The Homepage</Button>
  </Container>
}

export default DetailsNotFound;
