# Data visualization using matplotlib and pandas
import pandas as pd
import matplotlib.pyplot as plt
import json
import os

def load_data():
    """Load the sample data"""
    data_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'sample_data.json')
    with open(data_path, 'r') as f:
        return json.load(f)

def create_visualization():
    """Create and save a visualization"""
    # Load data
    data = load_data()
    df = pd.DataFrame(data)
    
    # Convert date to datetime
    df['date'] = pd.to_datetime(df['date'])
    
    # Create plot
    plt.figure(figsize=(10, 6))
    plt.bar(df['date'], df['value'], color='steelblue')
    plt.xlabel('Date')
    plt.ylabel('Value')
    plt.title('Sample Data Visualization')
    plt.xticks(rotation=45)
    plt.tight_layout()
    
    # Save the figure
    output_path = os.path.join(os.path.dirname(__file__), '..', 'output')
    os.makedirs(output_path, exist_ok=True)
    plt.savefig(os.path.join(output_path, 'visualization.png'))
    print(f"Visualization saved to {os.path.join(output_path, 'visualization.png')}")

if __name__ == "__main__":
    create_visualization()