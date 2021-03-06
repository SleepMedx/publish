jQuery(document).ready(function(){
	jQuery('#share-email-widget').live('click', function(event) {

		jQuery('#email-widget').toggle('show');

		jQuery('#subscribe-widget').hide();
		jQuery('#share-tip-info').hide();
		jQuery('#subscribe-form-widget-subscription-options').hide();
	});

	jQuery('#subscribe-button').live('click', function(event) {

		jQuery('#subscribe-widget').toggle('show');

		jQuery('#email-widget').hide();
		jQuery('#share-tip-info').hide();
		jQuery('#subscribe-form-widget-subscription-options').hide();

	});

	jQuery('#share-tip').live('click', function(event) {

		jQuery('#share-tip-info').toggle('show');

		jQuery('#email-widget').hide();
		jQuery('#subscribe-widget').hide();
		jQuery('#subscribe-form-widget-subscription-options').hide();

	});

	jQuery('#share-tip-alt').live('click', function(event) {

		jQuery('#share-tip-info').toggle('show');

		jQuery('#email-widget').hide();
		jQuery('#subscribe-widget').hide();
		jQuery('#subscribe-form-widget-subscription-options').hide();

	});

	jQuery('#tip-bitcoin').live('click', function(event) {
		jQuery('#bitcointips-widget').toggle('show');
	});

	jQuery('#tip-flattr').live('click', function(event) {
				FlattrLoader.setup();
				jQuery('#flattr-widget').toggle('show');
	});
	jQuery('#tip-gittip').live('click', function(event) {
				jQuery('#gittip-widget').toggle('show');
	});

	/* Get rid of this? */
	jQuery('#alt-tip-method').live('click', function(event) {
				jQuery('#bitcointips-widget').toggle('show');
	});

	jQuery('#subscription-options-button').live('click', function(event) {

		jQuery('#subscribe-form-widget-subscription-options').toggle();
		jQuery('#rss-feeds').toggle();

	});

	/* jQuery for Comment Form Enhancements */
		jQuery('#comment-form-fields').hide();
		jQuery('#submit').hide();
	jQuery('#comment-form-field').live('click', function(event) {

		jQuery('#comment-form-fields').show('fast');
		jQuery('#submit').show('fast');
	});
	jQuery('.comment-reply-link').live('click', function(event) {
		/*jQuery('#reply-title').html($('#reply-title')
			                    .html()
			                    .replace('Your thoughts? Please leave a reply:', ''));*/
		//jQuery('#reply-title').css('float', 'right');
		jQuery('#comment-form-fields').show('fast');
		jQuery('#submit').show('fast');
		jQuery('#main-reply-title').hide();
		jQuery('#comment').attr('placeholder', 'Type your reply here');
	});
	jQuery('#cancel-comment-reply-link').live('click', function(event) {
		jQuery('#main-reply-title').show();
	});
});

// Used to load sharing services in a popup window
function share_button_popup(a){window.open(a,"_blank","width=500,height=300,toolbar=0,menubar=0,location=0,resizable=0,scrollbars=0,status=0")}
