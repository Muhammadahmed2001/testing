




import { Flex, Input } from 'antd';



const { TextArea } = Input;
const onChange = (e) => {
  console.log('Change:', e.target.value);
};

const MainTextArea = () => {
  return (
    <div>
      <TextArea
        showCount
        maxLength={100}
        onChange={onChange}
        placeholder="disable resize"
        style={{
          height: 120,
          resize: "none",
        }}
      />
    </div>
  );
};

export default MainTextArea;
