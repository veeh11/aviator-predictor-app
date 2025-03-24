document.addEventListener('DOMContentLoaded', () => {
    const predictionValue = document.getElementById('prediction-value');
    fetchPrediction().then(prediction => {
        predictionValue.textContent = `Prediction: ${prediction}%`;
    }).catch(error => {
        predictionValue.textContent = 'Error loading prediction';
        console.error('Error:', error);
    });
});

async function fetchPrediction() {
    // Simulate fetching prediction from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(85); // Example prediction value
        }, 1000);
    });
}
