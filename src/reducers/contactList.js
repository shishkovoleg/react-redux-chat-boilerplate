import faker from 'faker';
import _ from 'lodash';
import moment from 'moment';

export default function() {

	return _.times(20, function(n) {
		return {
			id: n,
			name: faker.name.findName(),
			photo: faker.internet.avatar(),
			lastTime: moment().format("ddd, hA"),
			lastMessage: _.truncate(faker.lorem.sentence(), {'length': 25})
		};
	});
}