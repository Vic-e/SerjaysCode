const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Homepage">
        <nav>
          <a href="/hire">Book Us!</a>
        </nav>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/hire" method="POST">
          Name: <input type="text" name="name" required /> <br />
          Number of children:{" "}
          <input
            type="number"
            name="numberOfChildren"
            min={1}
            max={5}
            required
          />{" "}
          <br />
          Age of children: <input type="text" name="ageOfChildren" required />
          <br />
          Number of hours:{" "}
          <input
            type="number"
            name="numberOfHours"
            required
            min={1}
            max={10}
          />{" "}
          <br />
          <label for="location">Location:</label>
          <select id="country" name="country">
            <option value="nyc">NYC, NY</option>
            <option value="hampton">Hampton, VA</option>
            <option value="silverSpring">Silver Spring, MD</option>
            <option value="ohio">Coleman, OH</option>
          </select>
          <br />
          Date:
          <input
            type="datetime-local"
            name="date"
            min="2023-01-01"
            required
          />
          <input type="submit" value="Create posting" />
        </form>
        <p>
          *IF MORE THAN 10 HOURS NEEDED PLEASE CONTACT US. WE WILL ACCOMMODATE
          FOR YOU!
        </p>
      </DefaultLayout>
    );
  }
}

module.exports = New;
