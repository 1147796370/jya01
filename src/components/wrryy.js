const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");
const {
	exec
} = require("child_process");

export default async function OPOP(text, yyy) {
	const speechConfig = sdk.SpeechConfig.fromSubscription('7f85925d8b414269bf4a92d5414174f1', 'eastasia');
	const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
	speechConfig.speechSynthesisVoiceName = yyy;

	const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
	ADD(text)

	function ADD(text) {
		synthesizer.speakTextAsync(text, (result) => {
			if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
				console.log("Synthesis finished.");
				fs.readFile("output.wav", (err, data) => {
					if (err) {
						console.error("Error reading audio file:", err);
						return;
					}
					fs.writeFileSync("output.wav", data);
					exec("afplay output.wav", (err) => {
						if (err) {
							console.error("Error playing audio:", err);
						}
					});
				});
			} else {
				console.error("Speech synthesis canceled, " + result.errorDetails);
			}
			synthesizer.close();
		}, (err) => {
			console.error("Error synthesizing speech:", err);
			synthesizer.close();
		});
		console.log("Now synthesizing:", text);
	}
}
