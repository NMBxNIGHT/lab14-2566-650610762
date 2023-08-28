"use client";
import { Footer } from "@/components/Footer";
import {
  Container,
  Text,
  Title,
  Rating,
  Textarea,
  Button,
  Divider,
  Group,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your Rating
      </Title>
      <Rating defaultValue={0}></Rating>
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
      ></Textarea>
      <Button color="orange" mt="sm">
        Submit Review
      </Button>
      <Divider my="sm"></Divider>

      <Group position="center">
        <Title order={4} mt="sm">
          Elon Musk
        </Title>
        <Rating defaultValue={5} mt="sm" readOnly />
      </Group>
      <Text color="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider mt="sm" />
      <Group position="center">
        <Title order={4} mt="sm">
          Mark Zuck
        </Title>
        <Rating defaultValue={4} mt="sm" readOnly />
      </Group>
      <Text color="dimmed" align="center">
        My favourite part is pepperoni
      </Text>

      <Pagination total={20} mt="lg" color="orange" position="center" />

      <Text align="center" color="dimmed" my="sm">
        <Footer years="2023" name="Thiranat Kakanmee" id="650610762" />
      </Text>
    </Container>
  );
}
