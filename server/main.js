import _ from "lodash";
import { image, helpers } from "faker";
import { Meteor } from "meteor/meteor";
import { Employees } from "../imports/collections/employees";

Meteor.startup(() => {
  const numberRecords = Employees.find({}).count();

  if (!numberRecords) {
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert(
        {
          name,
          email,
          phone,
          avatar: image.avatar()
        },
        rec => {
          console.log(rec);
        }
      );
    });
  }

  Meteor.publish("employees", () => {
    return Employees.find({}, { limit: 20 });
  });
});
