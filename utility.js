this.onKeyPressTime = function(evt) {
		var charCode = (evt.which) ? evt.which : event.keyCode;

		if (charCode > 31
				&& (charCode != 58 && (charCode < 48 || charCode > 57))) // Which
																			// accepts
																			// only
																			// numbers
																			// along
																			// with
																			// :
			return false;

		return true;
	}
