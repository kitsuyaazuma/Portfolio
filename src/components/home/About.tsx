import {
  Title,
  Center,
  Flex,
  Highlight,
  Stack,
  Container,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import Image from "next/image";
import React from "react";
import { SocialButton } from "../common/Social";
import { abouts } from "../data/about";
import { socials } from "../data/social";

export const darkHighlightColor = "rgba(47, 158, 68, 0.2)";

export const About = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container py="xl">
      <Center my="lg">
        <Title>ABOUT ME</Title>
      </Center>

      <Flex
        direction={{ base: "column", sm: "row" }}
        gap="xl"
        justify="center"
        align="center"
      >
        <Image
          width={300}
          height={300}
          src="/images/home/profile.webp"
          alt="Kitsuya Azuma"
          style={{ borderRadius: "3%" }}
        />
        <Stack>
          {abouts.map((about) => (
            <Highlight
              size="sm"
              key={about.text}
              highlightStyles={(theme) => ({
                backgroundColor:
                  colorScheme === "dark"
                    ? darkHighlightColor
                    : theme.colors.green[0],
                color: colorScheme === "dark" ? "white" : "black",
                fontWeight: "bolder",
              })}
              highlight={about.searchWords}
            >
              {about.text}
            </Highlight>
          ))}
          <Group gap="sm" align="center" justify="center" mt="xs">
            {socials.map((social) => (
              <SocialButton
                key={social.name}
                name={social.name}
                url={social.url}
              />
            ))}
          </Group>
        </Stack>
      </Flex>
    </Container>
  );
};
