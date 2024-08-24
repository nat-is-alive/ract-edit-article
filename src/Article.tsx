import { ArticleProps } from "./types/types";

export default function Article({ heading, content, accessLevel, isEditing }: ArticleProps) {

    let text = isEditing && accessLevel === 'write' ? 
        <textarea defaultValue={content} /> : 
        <p>{content}</p>;

    return (
        <>
            <h1>{heading}</h1>
            {text}
        </>
    );
}