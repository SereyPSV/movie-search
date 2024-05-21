"use client";

import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { Button, TextInput, Title } from "@mantine/core";

import styles from "./Rated.module.css";
import { IconSearch } from "@tabler/icons-react";

export default function RatedMovies() {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 500);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Title className={styles.title}>Rated movies</Title>
        <div className={styles.search}>
          <TextInput
            placeholder="Search movie title"
            className={styles.searchInput}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            leftSection={<IconSearch size={18} stroke={1.5} />}
          />

          <Button
            className={styles.searchButton}
            variant="filled"
            color="violet"
            size="md"
            radius="md"
            onClick={() => setValue("")}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}
