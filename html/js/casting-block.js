$(document).ready(function(){var t=0,e=!1;window.DIOT_WALLET_API.getEncryptStatus(function(e){!e||1!==e.result&&"1"!==e.result||(t=e.result)}),jQuery("#btnSetCastingBlockStatus").on("click",function(){if(1!==t&&"1"!==t||!e)window.DIOT_WALLET_API.setForgeBlock(e,function(t){if(t||1===t.result||"1"===t.result)return s(),void window.DIOT_WALLET_API.walletlock()});else{var r=jQuery("#txtWalletPasss").val();if(!r||r.length<=0)return void alert(window.DIOT_I18N["Please enter passworld"]);window.DIOT_WALLET_API.walletPassphrase(r,63072e3,function(t){t&&0!==t.result&&"0"!==t.result?window.DIOT_WALLET_API.setForgeBlock(e,function(t){(t||1===t.result||"1"===t.result)&&s()}):alert(window.DIOT_I18N["Error Passworld"])})}});var s=function(){window.DIOT_WALLET_API.getStakingInfo(function(t){if(t&&t.result){if(jQuery("#txtWalletPasss").val(""),jQuery("#spnStakingfrozen").text(t.result.stakingfrozen/1e8),jQuery("#spnDifficulty").text(t.result.difficulty),jQuery("#spnWeight").text(parseInt(t.result.weight/1e8)),jQuery("#spnExpectedtime").text(window.DIOT_I18N.Estimate+parseInt(t.result.expectedtime/60)+window.DIOT_I18N["minute(s) later will get the chance of forging blocks"]),jQuery("#spnNetstakeweight").text(parseInt(t.result.netstakeweight/1e8)),jQuery("#spnStaking").text((t.result.staking+"").toUpperCase()),0===parseInt(t.result.expectedtime/60)&&jQuery("#spnExpectedtime").text(window.DIOT_I18N["Stop forging blocks now"]),t.result.weight<=0)return jQuery("#imgCastingStatus").addClass("static"),e=!1,jQuery("#btnSetCastingBlockStatus").remove(),void jQuery("#walletPass").remove();t.result.staking&&"false"!==t.result.staking&&"FALSE"!==t.result.staking?(jQuery("#btnSetCastingBlockStatus").text(window.DIOT_I18N["Stop Forge"]),e=!1,jQuery("#imgCastingStatus").removeClass("static"),jQuery("#walletPass").hide()):(jQuery("#btnSetCastingBlockStatus").text(window.DIOT_I18N["Start Forge"]),jQuery("#imgCastingStatus").addClass("static"),jQuery("#walletPass").show(),e=!0)}})};s()});