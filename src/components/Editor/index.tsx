import "./index.css";
type Props = {
  content: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export const Editor = ({ content, onChange }: Props) => {
  return (
    <div>
      <textarea id='editor' onChange={onChange} value={content} />
    </div>
  );
};
