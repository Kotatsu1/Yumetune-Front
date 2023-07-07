import { Song } from "@/entities/Song/types";

const Song = ({ /*img, alt, */ id, selectedId, name, artist, duration, callback }: Song) => {
  return (
    <>
      <svg onClick={() => callback(id)} className="cursor-pointer absolute mt-4" version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="12.000000pt" height="12.000000pt" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#ffffff" stroke="none">
        <path d="M425 5105 c-60 -22 -110 -68 -139 -127 l-26 -52 0 -2366 0 -2366 26
        -52 c31 -63 81 -106 148 -128 72 -24 141 -14 229 34 40 21 974 546 2077 1166
        1250 703 2019 1142 2043 1164 54 53 77 106 77 182 0 76 -23 129 -77 182 -24
        22 -793 461 -2043 1164 -1103 620 -2038 1145 -2078 1167 -86 46 -168 57 -237
        32z"/>
        </g>
      </svg>
      
      <tr className={id === selectedId ? "bg-primary" : ""}>
        <td>
          {'ㅤㅤ'}
          {name}
        </td>
        <td>{artist}</td>
        <td>{`${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, "0")}`}</td>
      </tr>
    </>
  );
};

export default Song;
