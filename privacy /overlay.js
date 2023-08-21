(function(document, $) {
	"use strict";
	$(document)
			.on(
					"foundation-contentloaded",
					function(e) {
						var dataLinkName = document.createElement("a");

						dataLinkName.className += "dataLinkClass";
						dataLinkName.innerHTML = "Microsoft Data Privacy Notice";

						dataLinkName
								.addEventListener(
										"click",
										function(evt) {
											evt.preventDefault();
											window
													.open("http://go.microsoft.com/fwlink/?LinkId=518021");
											return false;
										});

						var coralShellHeaderHome = document
								.getElementsByTagName("coral-shell-header-home")[0];
						if (coralShellHeaderHome !== undefined) {
							document
									.getElementsByTagName('coral-shell-header-home')[0]
									.appendChild(dataLinkName);
						}

					});
})(document, Granite.$);
