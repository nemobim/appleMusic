import MusicInfo from "./MusicInfo";

const MusicDetail = () => {
  return (
    <div>
      <MusicInfo title="Price" text="11.99" />
      <MusicInfo title="category" text="Country" />
      <MusicInfo title="contentType" text="Album" />
      <MusicInfo title="releaseDate" text="2023-03-24T00:00:00-07:00" />
      <MusicInfo
        title="rights"
        text="℗ 2023 River House Artists LLC, under exclusive license to Sony Music Entertainment. All rights reserved."
      />
    </div>
  );
};

export default MusicDetail;
