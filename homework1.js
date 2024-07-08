//Задание 1
const musicCollection = {
  albums: [
    { title: "Шоколадка", 
      artist: "Минаева", 
      year: "2024" },
    { title: "Lovers", 
      artist: "Гио Пика, Кравц", 
      year: "2023" },
    {
      title: "Истеричка",
      artist: "Султан Лагучев",
      year: "2024",
    },
  ],
  [Symbol.iterator]() {
    let index = 0;
    const albums = this.albums;
    return {
      next() {
        if (index < albums.length) {
          return { value: albums[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
