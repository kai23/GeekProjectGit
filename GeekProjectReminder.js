Project = new Meteor.Collection('Project');
if (Meteor.isClient) {
	var insert_item = function() {
		Project.insert({
			name: $('.new_project_name').val(),
			description: $('.description').val(),
			author_name: $('.author_name').val(),
			author_email: $('.author_email').val()
		});
		$('.new_project_name').val('');
		$('.description').val('');
		$('.author_name').val('');
		$('.author_email').val('');
	};

	Template.new_project.events({
		'click .add': function() {
			insert_item();
		},
		'keyup .new_project_name': function(e) {
			if (e.which === 13) {
				insert_item();
			}
		},
		'keyup .description': function(e) {
			if (e.which === 13) {
				insert_item();
			}
		},
		'keyup .author_name': function(e) {
			if (e.which === 13) {
				insert_item();
			}
		},
		'keyup .author_email': function(e) {
			if (e.which === 13) {
				insert_item();
			}
		}
	});

	Template.liste_projets.all_project = function() {
		return Project.find();
	};

	Template.liste_projets.events({
		'click .remove': function() {
			Project.remove(this._id);
		}
	});
}