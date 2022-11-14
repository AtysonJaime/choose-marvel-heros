import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;

  .content-heros {
    padding: 16px;
  }
`;
const StyledBanner = styled.div`
  background-image: url(https://images.unsplash.com/photo-1641478861139-c0b3aebbf613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGF2ZW5nZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 230px;
  width: 100%;
  margin-top: 56px;
`;
export default function Content() {
  return (
    <StyledContent>
      <StyledBanner />
      <section className="content-heros">
        <h2>Escolha seus herois</h2>
      </section>
    </StyledContent>
  );
}
