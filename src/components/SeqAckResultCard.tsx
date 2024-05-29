type SeqAckResultCardProps = {
  inputNum: number[];
};

function SeqAckResultCard({ inputNum }: SeqAckResultCardProps) {
  return (
    <div className="gap-2">
      <p> {`-----     Seq= ${inputNum[0]} ACK= ${inputNum[1]}     ---->`} </p>
      <br />
      <p> {`<----     Seq= ${inputNum[1]} ACK= ${inputNum[0] + inputNum[2]}     ----`} </p>
      <br />
      <p>
        {" "}
        {`-----      Seq= ${inputNum[0] + inputNum[2]} ACK= ${
          inputNum[1] + inputNum[2]
        }     ---->`}{" "}
      </p>
    </div>
  );
}

export default SeqAckResultCard;
