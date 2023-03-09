import type { Users } from "../types/user";
import type { FC } from "react";

export const ListItem: FC<Users> = props => {
    const { id, name, age, personalColor, hobbies } = props;

    return (
        <p style={{ color: personalColor }}>
            {/*실행할 때까지 hobbies 가 설정되어 있지 않음*/}
            {/*옵셔널 체이닝 사용 undefined 상태에서 생략 가능*/}
            {id} : {name}({age}) {hobbies?.join(" / ")}
        </p>
    );
};

// 생략 가능한 Props 의 default 정의 ( 가독성 상승 )
ListItem.defaultProps = {
    personalColor: "grey"
}