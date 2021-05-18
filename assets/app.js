(function() {
	"use strict";

	var metricsDesktop = document.getElementById("desktop-metrics");
	var menuExpandButton = document.getElementById("expand-menu-button");
	var showAliasDetails = document.getElementById("show-alias-details");
	var headerNav = document.getElementById("header-nav");
	var header = document.getElementById("header");
	var cardBottomHidden = true;
	var cardBottomMobile = document.getElementById("card-bottom-mobile");
	var cardBottomDesktop = document.getElementById("card-bottom-desktop");
	var addAccountAction = document.getElementById("add-account-action");

	// Toggle menu open in mobile view
	menuExpandButton.addEventListener("click", () => {
		var arrowIcon = document.getElementById("menu-open-icon");
		arrowIcon.classList.toggle("fa-chevron-up")
		arrowIcon.classList.toggle("fa-chevron-down")
		headerNav.classList.toggle("hidden");
		header.classList.toggle("open");
	});

	// Toggle showing bottom of card with alias information
	showAliasDetails.addEventListener("click", () => {
		var arrowIcon = document.getElementById("details-open-icon");
		var text = document.getElementById("show-details-text");

		// Change button text
		if (text.innerHTML == "Show Details") {
			text.innerHTML = "Hide Details"
		} else {
			text.innerHTML = "Show Details"
		}

		// Toggle arrow icon up or down
		arrowIcon.classList.toggle("fa-chevron-up")
		arrowIcon.classList.toggle("fa-chevron-down")

		toggleCardBottom();
	});

	function toggleCardBottom() {
		if (!cardBottomHidden && mediaQuery.matches) {
			cardBottomMobile.classList.toggle("hidden");
		} else if (!cardBottomHidden && !mediaQuery.matches) {
			cardBottomDesktop.classList.toggle("hidden");
		} else if (cardBottomHidden && mediaQuery.matches) {
			cardBottomMobile.classList.toggle("hidden");
		} else if (cardBottomHidden && !mediaQuery.matches) {
			cardBottomDesktop.classList.toggle("hidden");
		}
		cardBottomHidden = !cardBottomHidden;
	}

	// Hide or show elements depending on a media query breakpoint
	function breakpoint(mediaQuery) {
		if (mediaQuery.matches) {
			cardBottomDesktop.classList.add("hidden")
			if (!cardBottomHidden) cardBottomMobile.classList.remove("hidden");
			metricsDesktop.classList.add("hidden")
			headerNav.classList.add("hidden")
			menuExpandButton.classList.remove("hidden")
			addAccountAction.classList.add("hidden")
		} else {
			cardBottomMobile.classList.add("hidden")
			if (!cardBottomHidden) cardBottomDesktop.classList.remove("hidden");
			menuExpandButton.classList.add("hidden")
			metricsDesktop.classList.remove("hidden")
			headerNav.classList.remove("hidden")
			addAccountAction.classList.remove("hidden")
		}
	}

	// Set mobile breakpoint
	var mediaQuery = window.matchMedia("(max-width: 600px)")
	breakpoint(mediaQuery)

	// everytime screen is wider/smaller than breakpoint run the function
	mediaQuery.addListener(breakpoint)

})();
