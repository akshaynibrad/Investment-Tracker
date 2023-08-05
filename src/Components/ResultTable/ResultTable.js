import Style from "./ResultTable.module.css";

const ResultTable = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <table className={Style.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  item.savingsEndOfYear -
                    item.initialInvestment -
                    item.yearlyContribution * item.year
                )}
              </td>
              <td>
                {formatter.format(
                  item.initialInvestment + item.yearlyContribution * item.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
