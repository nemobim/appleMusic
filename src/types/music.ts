import { Dispatch, SetStateAction } from "react";

export interface IInfoProps {
  title: string;
  text: string;
}

export interface ILinkProps {
  href: string;
  text: string;
}

export interface IMusicData {
  data: IMusicInfo;
  rank: number;
}

export interface IInfocData {
  infoData: {
    title: string;
    text: string;
  }[];
}

export interface IMusicInfo {
  id: string;
  artistLink: string;
  albumLink: string;
  image: string;
  infoArray: {
    title: string;
    text: string;
  }[];
}

export interface IMusic {
  "im:name": {
    label: string;
  };
  "im:image": {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  "im:itemCount": {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  "im:contentType": {
    "im:contentType": {
      attributes: {
        term: string;
        label: string;
      };
    };
    attributes: {
      term: string;
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": {
    label: string;
    attributes: {
      href: string;
    };
  };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": {
    label: string;
    attributes: {
      label: string;
    };
  };
}
