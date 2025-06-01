# Tests for utility functions

import unittest
import datetime
import time
from src.utils import format_date, random_string, deep_clone, debounce

class TestUtils(unittest.TestCase):
    def test_format_date(self):
        """Test that format_date formats dates correctly"""
        date = datetime.datetime(2023, 1, 15, 10, 30, 45)
        self.assertEqual(format_date(date, "%Y-%m-%d"), "2023-01-15")
        self.assertEqual(format_date(date, "%m/%d/%Y"), "01/15/2023")
        self.assertEqual(format_date(date, "%d.%m.%Y %H:%M"), "15.01.2023 10:30")
        
    def test_random_string(self):
        """Test that random_string generates strings of correct length"""
        self.assertEqual(len(random_string(5)), 5)
        self.assertEqual(len(random_string(10)), 10)
        self.assertEqual(len(random_string()), 10)  # Default length
        
    def test_deep_clone(self):
        """Test that deep_clone creates a deep copy of an object"""
        original = {"a": 1, "b": {"c": 2}, "d": [1, 2, 3]}
        clone = deep_clone(original)
        
        # Modify clone
        clone["a"] = 99
        clone["b"]["c"] = 98
        clone["d"][0] = 97
        
        # Original should be unchanged
        self.assertEqual(original["a"], 1)
        self.assertEqual(original["b"]["c"], 2)
        self.assertEqual(original["d"][0], 1)
        
    def test_debounce(self):
        """Test that debounce delays function execution"""
        counter = 0
        
        @debounce(0.1)
        def increment():
            nonlocal counter
            counter += 1
            return counter
            
        # Call multiple times
        increment()
        increment()
        increment()
        
        # Counter should still be 0 immediately
        self.assertEqual(counter, 0)
        
        # Wait for debounce
        time.sleep(0.15)
        
        # Counter should be 1 after the wait
        self.assertEqual(counter, 1)
        
if __name__ == '__main__':
    unittest.main()