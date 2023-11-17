import React, { useContext } from "react";
import styled from "styled-components";
import { FamilyContext } from "shared/context/FamilyContext";

function MemberList({ selectMember, setSelectMember }) {
  const data = useContext(FamilyContext);
  const members = [
    { id: 0, name: "이찬혁" },
    { id: 1, name: "이수현" },
  ];

  return (
    <Container>
      {members.map((member) => {
        return (
          <StyledBtn
            key={member.id}
            $select={data.selectMember}
            id={member.id}
            // style={{
            //   backgroundColor:
            //     selectedMemberId === member.id ? "green" : "white",
            // }}
            onClick={() => {
              data.setSelectMember(member.id);
            }}
          >
            {member.name}
          </StyledBtn>
        );
      })}
    </Container>
  );
}

const StyledBtn = styled.button`
  background-color: ${(props) =>
    props.$select === props.id ? "yellow" : "white"};
  //버튼 사이 간격
  margin-left: 20px;
  font-size: 40px;
  border-radius: 15px;
`;

const Container = styled.div`
  background-color: #a3a3a3;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 400px;
  margin: 140px auto;
`;

export default MemberList;

// MemberList.jsx

// import React from "react";
// import styled from "styled-components";

// function MemberList({ onSelectMember }) {
//   const members = [
//     { id: 1, name: "이찬혁" },
//     { id: 2, name: "이수현" },
//   ];

//   const StyledBtn = styled.button`
//     background-color: ${(props) => (props.selected ? "yellow" : "white")};
//   `;

//   return (
//     <>
//       {members.map((member) => (
//         <StyledBtn
//           key={member.id}
//           selected={false}
//           onClick={() => onSelectMember(member.name)}
//         >
//           {member.name}
//         </StyledBtn>
//       ))}
//     </>
//   );
// }

// export default MemberList;
