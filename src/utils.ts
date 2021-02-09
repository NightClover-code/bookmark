//data interface
export interface DataInterface {
  title: string;
  description: string;
  imgSource: string;
}
//data
const data = (): DataInterface[] => {
  return [
    {
      title: 'Bookmark in one click',
      description:
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      imgSource: './images/illustration-features-tab-1.svg',
    },
    {
      title: 'Intelligent search',
      description:
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      imgSource: './images/illustration-features-tab-2.svg',
    },
    {
      title: 'Share your bookmark',
      description:
        'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      imgSource: './images/illustration-features-tab-3.svg',
    },
  ];
};
export default data();
