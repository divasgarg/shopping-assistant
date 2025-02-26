export default function handler(req, res) {
    if (req.method === "POST") {
        const recommendations = ["Laptop", "Smartphone", "Headphones"];
        res.status(200).json({ recommendations });
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}