import { styled } from "@stitches/react";
import React, { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const BoardWrapper = styled("div", {
    background: "rgb(25, 162, 25)",
    padding: "20px 0",
});

const Board: FC<Props> = ({ children }) => {
    return <BoardWrapper>{children}</BoardWrapper>;
};

export default Board;
