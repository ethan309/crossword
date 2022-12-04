async function getRandomWord(): Promise<string> {
    const word = await fetch("https://api.api-ninjas.com/v1/randomword", {
        headers: { "X-Api-Key": process.env.REACT_APP_WORDS_API_KEY ?? "" },
    }).then((response) => response.json());
    return word.word;
}

export async function getRandomWords(
    numberOfWords: number,
    maxWordLength: number = 100,
    minWordLength: number = 3
): Promise<string[]> {
    const words = new Set<string>();

    while (words.size < numberOfWords) {
        const newWord = await getRandomWord();
        if (
            newWord.length <= maxWordLength &&
            newWord.length >= minWordLength
        ) {
            words.add(newWord);
        }
    }

    return Array.from(words);
}
