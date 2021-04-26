import React from 'react'

export const Tables = () => {
  return (
    <div>
      <div class="conainer">

        <p>I will use this paragraph to link you to another page that contains my <a href="trial.html/#dob">date of birth.</a>
  just click the text in blue.</p>

        <table class="table table-bordered table-stripped table-hover">
          <thead>
            <tr ><td colspan="4">Automobile details</td></tr>
          </thead>
          <tr>
            <th></th>
            <th scope="col" class="text-center">Japan</th>
            <th scope="col" class="text-center">Us</th>
            <th scope="col" class="text-center">US</th>
          </tr>

          <tr>
            <th class="text-center">Car Name</th>
            <td>Nissan gtr</td>
            <td>Ford Mustang</td>
            <td>Toyota Tundra</td>
          </tr>


          <tr>
            <th scope="row" class="text-center">Engine size</th>
            <td>V6 3.6 litre engine</td>
            <td>V8 5.7 litre engine</td>
            <td>V8 5.7 litre engine</td>
          </tr>

        </table>

        <br /><br /><hr /><br /><br />

        <table border="3" bgcolor="#7FFF00">

          <tr>

            <th></th>
            <th scope="col">Mon</th>
            <th scope="col">Tue</th>
            <th scope="col">Wed</th>
            <th scope="col">Thu</th>
            <th scope="col">Fri</th>
            <th scope="col">Sat</th>
            <th scope="col">Sun</th>

          </tr>

          <tr>

            <th scope="row">Breakfast</th>
            <td>Rolex</td>
            <td>Bread</td>
            <td>Matooke</td>
            <td>Yams</td>
            <td>Chappatti</td>
            <td>Rolex</td>
            <td>Samosa</td>

          </tr>

          <tr>

            <th scope="row">Lunch</th>
            <td>Peas</td>
            <td colspan="2">Beans</td>
            <td rowspan="3">Chicken</td>
            <td>Pork</td>
            <td>Kikomando</td>
            <td>Chicken</td>

          </tr>

          <tr>

            <th scope="row">Dinner</th>
            <td>Rolex</td>
            <td>Beef</td>
            <td>Peas</td>
            <td>G, Nuts</td>
            <td>Fish</td>
            <td>Chicken</td>

          </tr>

        </table>

        <p>Well, In this next table, I will be testing the use of a long table.
  just check it out</p>

        <table>

          <thead>
            <th width="100">Name</th>
            <th width="100">Year Met</th>
            <th width="100">Class</th>
          </thead>

          <tbody>
            <tr>
              <td>Arnold</td>
              <td>2014</td>
              <td>F.5</td>
            </tr>

            <tr>
              <td>Steve</td>
              <td>2016</td>
              <td>Y.1</td>
            </tr>

            <tr>
              <td>Lambert</td>
              <td>2014</td>
              <td>F.5</td>
            </tr>

            <tr>
              <td>Sheila</td>
              <td>2015</td>
              <td>F.6</td>
            </tr>

          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td>2017</td>
              <td>Y.2</td>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  )
}
