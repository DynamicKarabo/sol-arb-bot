import os
import re

def scrub():
    print("Scrubbing files...")
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file.endswith(('.js', '.ts', '.jsx', '.tsx', '.md', '.json', '.yml')):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                    
                    # User requested 'OriginalAuthor' -> 'YourName'. 
                    # Assuming 'YourName' should be 'DynamicKarabo' based on previous context.
                    # Assuming 'OriginalAuthor' is the literal string to find.
                    content = re.sub(r'OriginalAuthor', 'DynamicKarabo', content)
                    content = re.sub(r'copyright.*', '', content, flags=re.IGNORECASE)
                    content = re.sub(r'https://github.com/senior106', 'https://github.com/dynamickarabo', content)
                    content = re.sub(r'Original Project Name', 'sol-arb-bot', content, flags=re.IGNORECASE)
                    
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(content)
                except Exception as e:
                    print(f"Error processing {path}: {e}")
    print("Scrubbing complete.")

if __name__ == "__main__":
    scrub()
